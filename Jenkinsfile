pipeline {
    agent any

    stages {

        stage("Build Image") {
            steps {
                sh "echo Consulting Elon Musk for building the image"
                sh "docker build -t nightcodex/nodejs-app:${BUILD_NUMBER} ."
            }
        }
        stage("Run Container") {
            steps {
                sh "echo Running the container"
                sh "docker run -d --name nodeapp -p 7393:5040 nightcodex/nodejs-app:${BUILD_NUMBER}"
            }
        }
        stage("Login to DockerHub") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'ncxDocker', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo Connecting to Jaadu's spaceship"
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                }
            }
        }
        stage("Push Image") {
            steps {
                sh "Missed call received from Jaadu..."
                sh "docker push nightcodex/nodejs-app:${BUILD_NUMBER}"
            }
        }
    }
}