pipeline {
    agent any

    stages {

        stage("Build Image") {
            steps {
                sh "echo Building Docker image..."
                sh "docker build -t nightcodex/nodejs-app:${BUILD_NUMBER} ."
            }
        }

        stage("Stop Old Container") {
            steps {
                sh "docker rm -f nodeapp || true"
            }
        }

        stage("Run Container") {
            steps {
                sh "echo Running container..."
                sh "docker run -d --name nodeapp -p 7393:5040 nightcodex/nodejs-app:${BUILD_NUMBER}"
            }
        }

        stage("Login to DockerHub") {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'ncxDocker',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "\$DOCKER_PASS" | docker login -u "\$DOCKER_USER" --password-stdin
                    """
                }
            }
        }

        stage("Push Image") {
            steps {
                sh "echo Pushing image to Docker Hub..."
                sh "docker push nightcodex/nodejs-app:${BUILD_NUMBER}"
            }
        }
    }
}