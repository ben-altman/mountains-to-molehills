class Api::V1::LogsController < ApplicationController
    def index
        logs = Project.find_by(id: params[:id]).logs
        render json: logs
    end

    def show
        log = Log.find(params[:id])
        render json: log
    end

    def create
        project = Project.find_by(id: params[:project_id])
        log = project.build(log_params)
        if log.save
            render json: log, status: :accepted
       else
           resp = {
               error: log.errors.full_messages.to_sentence
           }
           render json: resp, status: :unprocessable_entity
       end
    end

    def update
        log = Log.find_by(id: params[:id])
        if log.update(log_params)
            render json: log           
       else
           render json: log.errors, status: :unprocessable_entity
       end
    end

    def destroy
        log = Log.find(params[:id])
        log.destroy
    end

    private

    def log_params
        params.require(:log).permit(:content, :project_id)
    end
end
