class AnswersController < ApplicationController
  def index
    render json: Answer.all
  end

  def show
    render json: answer
  end

  def create
    @answer = Answer.create solution_id: params[:solution_id]
    render json: @answer
  end

  def update
    answer.update solution_id: params[:solution_id], content: params[:content], user_id: params[:user_id]
    render json: @answer
  end

  def destroy
    answer.destroy
    render nothing: true
  end

  private
  def answer
    @answer ||= Answer.find(params[:id])
  end
end
