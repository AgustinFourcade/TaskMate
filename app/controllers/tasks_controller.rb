class TasksController < ApplicationController
    def index
      render json: Task.all
    end
  
    def show
      render json: Task.find(params[:id])
    end
  
    def create
        puts task_params
      @task = Task.new(task_params)
      if @task.save
        render json: @task
      else
        render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @task = Task.find(params[:id])
      puts @task
      if @task
        @task.destroy
        head :no_content
      else
        head :not_found
      end
    end
  
    private
  
    def task_params
      params.require(:task).permit(:title, :description, :due_date, :completed, :priority, :user_id, :status, :tags, :created_at, :updated_at)
    end
  end
  