import './Project1.css'
export const Project2=()=>{
    return<>
        <div className="project1">
            <div className="head">
                <div className="heading">
                    <h1>Project 2</h1>
                </div>
                <div className="description">
                    <h2><b>Project Description: Group Chat Application</b></h2>
                    <p>The Group Chat Application is a dynamic, real-time communication platform designed to enhance group interactions and
                    foster community engagement. This application provides seamless group chat functionality, ensuring a secure and
                    user-friendly experience for all participants. Below are the key features and functionalities of the application:</p>
                    <h3><b>Features:</b></h3>
                    <p>1. Group Chat Functionality:Users can join or create chat rooms to interact with other participants in real time.
                    Supports messaging within a group, with instant message delivery using WebSocket or similar technologies.</p>
                    <p>2. User Authentication with JWT:Secure login and authentication using JSON Web Tokens (JWT) to ensure only authorized users can access the chat rooms.
                    Tokens are used for session management and to protect user data.</p>
                    <p>3. Join and Leave Rooms:
                    Users can easily join or leave chat rooms with a single click.
                    On leaving, their activity is updated for other participants.</p>
                    <p>3. Real-Time Notifications:

                    Push notifications for new messages, mentions, or important updates within chat rooms.
                    Alerts for when users join or leave a room.</p>
                    <p>4. User Activity Tracking:

                    Displays the activity status (e.g., active, idle) of participants in real time.
                    Logs user activities, such as when they join, leave, or interact within a room.
                    Online User Count:

                    Shows the number of active users in each chat room.
                    Users can see who is currently online, fostering better engagement.</p>
                    <p>5. Responsive and User-Friendly Interface:

                    Optimized for both desktop and mobile devices, ensuring a seamless user experience across platforms.
                    Intuitive design for easy navigation between rooms and features.</p>
                    <p>6. Scalability and Performance:

                    Built to support a high number of concurrent users without compromising performance.
                    Implements efficient data handling to minimize latency.</p>

                    <h3><b>Technology Stack:</b></h3>
                    <p>Frontend: React.js for a responsive and interactive user interface.</p>
                    <p>Backend: Node.js with Express for REST APIs and WebSocket implementation for real-time communication.</p>
                    <p>Authentication: JWT for secure authentication and session management.</p>
                    <p>Database: MongoDB or PostgreSQL for storing user data, chat logs, and room details.</p>
                    <p>Notifications: Firebase Cloud Messaging (FCM) or other notification services.</p>
                    <p>Real-Time Communication: Socket.IO or WebSocket for instant message delivery and status updates.</p>
                    <a className="link" href="https://github.com/Samarth0777/chat-app">Visit here</a>
                </div>

            </div>

        </div>
    </>
}