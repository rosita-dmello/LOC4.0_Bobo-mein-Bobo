!pip install opencv-python
!apt update && apt install -y libsm6 libxext6
!apt-get install -y libxrender-dev

import streamlit as st
import mediapipe as mp
import cv2
import numpy as np
from PIL import Image

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose

def calculate_distance(p1,p2):
    point1 = np.array(p1)
    point2 = np.array(p2)
    
    dist = np.sqrt(np.sum(np.square(point1 - point2)))
    return dist

def calculate_angle(a,b,c):
    a = np.array(a) # First
    b = np.array(b) # Mid
    c = np.array(c) # End
    
    radians = np.arctan2(c[1]-b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
    angle = np.abs(radians*180.0/np.pi)
    
    if angle >180.0:
        angle = 360-angle
        
    return angle

st.title('Boxing')

# Counter Variables
counter = 0
f = 0
stagel = None 
stager = None

#Video
cap = cv2.VideoCapture(0)
frame_window = st.image([])

with mp_pose.Pose(
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            print("Ignoring empty camera frame.")
            # If loading a video, use 'break' instead of 'continue'.
            break
        image.flags.writeable = False
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = pose.process(image)
        image.flags.writeable = True

        try:
            landmarks = results.pose_landmarks.landmark
            
            # Coordinates of left arm
            left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            left_hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
            
            right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
            right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
            right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
            right_hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
            
            # angle
            angle1 = int(calculate_angle(left_shoulder, left_elbow, left_wrist))
            angle2 = int(calculate_angle(left_hip, left_shoulder, left_elbow))
            
            angle3 = int(calculate_angle(right_shoulder, right_elbow, right_wrist))
            angle4 = int(calculate_angle(right_hip, right_shoulder, right_elbow))
            
            
            # Curl Counter
            if angle1 < 15 and angle2 < 15:
                stagel="in"
            if angle1 > 150 and (angle2 < 100 and angle2 > 80)  and stagel=="in":
                stagel="out"
                f = 1
            if angle3 < 15 and angle4 < 15:
                stager="in"
            if angle3 > 150 and (angle4 < 100 and angle4 > 80)  and stager=="in" and f==1:
                stager="out"
                counter+=1
                f=0
                
        except:
            continue

        image = cv2.flip(image,1)
        
        # Display Box
        cv2.rectangle(image, (0,0), (100, 80), (196,170,29), -1)
        
        cv2.putText(image, "REPS", 
                        (15,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA
                        )
        cv2.putText(image, str(counter), 
                        (10,60), 
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA
                        )

        frame_window.image(image)

        # if counter == 10:
        #     image = Image.open('demo.jpg')
        #     frame_window.image(image)
        #     break