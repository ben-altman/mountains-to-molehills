class Api::V1::TasksController < ApplicationController
    def index
        tasks = Goal.find_by(id: params[:id]).tasks
        render json: tasks
    end

    def show
        task = Task.find(params[:id])
        render json: task
    end

    def create
        goal = Goal.find_by(id: params[:goal_id])
        goal = goal.build(task_params)
        if task.save
            render json: task, status: :accepted
       else
           resp = {
               error: task.errors.full_messages.to_sentence
           }
           render json: task, status: :unprocessable_entity
       end
    end

    def update
        task = Task.find_by(id: params[:id])
        if task.update(task_params)
            render json: task           
       else
           render json: task.errors, status: :unprocessable_entity
       end
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
    end

    private

    def task_params
        params.require(:task).permit(:description, :goal_id)
    end
end
