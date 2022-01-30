class Api::V1::GoalsController < ApplicationController

    def index
        goals = Goal.all
        render json: goals
    end

    def show
        goal = Goal.find(params[:id])
        render json: goal
    end

    def create
        # byebug
        project = Project.find_by(id: params[:project_id])
        goal = project.goals.build(goal_params)
        if goal.save
            render json: goal, status: :accepted
       else
           resp = {
               error: goal.errors.full_messages.to_sentence
           }
           render json: resp, status: :unprocessable_entity
       end
    end

    def update
        goal = Goal.find_by(id: params[:id])
        if goal.update(goal_params)
            render json: goal           
       else
           render json: goal.errors, status: :unprocessable_entity
       end
    end

    def destroy
        goal = Goal.find(params[:id])
        goal.destroy
    end

    private

    def goal_params
        params.require(:goal).permit(:description, :project_id)
    end
end
