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
counterl = 0
stagel = None 
counterr = 0
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
            
            right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
            right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
            right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
        
            # angle
            angle1 = calculate_angle(left_shoulder, left_elbow, left_wrist)
            angle2 = calculate_angle(right_shoulder, right_elbow, right_wrist)
            
            
            # Curl Counter
            #left hand
            if angle1 > 150:
                stagel = "down"
            if angle1 < 30 and stagel == "down":
                stagel = "up"
                counterl +=1
            
            #right hand
            if angle2 > 150:
                stager = "down"
            if angle2 < 30 and stager == "down":
                stager = "up"
                counterr +=1
                
        except:
            continue

        image = cv2.flip(image,1)
        
        # Display Box
        cv2.rectangle(image, (0,0), (100, 80), (196,170,29), -1)
        cv2.rectangle(image, (540,0), (640, 80), (196,170,29), -1)
        cv2.putText(image, "REPS (L)", 
                        (15,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA
                        )
        cv2.putText(image, "REPS (R)", 
                        (550,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA
                        )
        cv2.putText(image, str(counterl), 
                        (10,65), 
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA
                        )
        cv2.putText(image, str(counterr), 
                        (545,65), 
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA
                        )

        frame_window.image(image)

        # if counter == 10:
        #     image = Image.open('demo.jpg')
        #     frame_window.image(image)
        #     break