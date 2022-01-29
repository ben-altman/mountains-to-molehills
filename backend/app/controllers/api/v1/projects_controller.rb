class Api::V1::ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects, include: ['goals', 'goals.tasks', 'logs']
    end

    def show
        project = Project.find(params[:id])
        render json: project, include: ['goals', 'goals.tasks', 'logs']
    end

    def create
        project = Project.new(project_params)
        if project.save
            render json: project, status: :accepted
       else
           resp = {
               error: project.errors.full_messages.to_sentence
           }
           render json: resp, status: :unprocessable_entity
       end
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
    end

    private

    def project_params
        params.require(:project).permit(:title)
    end
end
