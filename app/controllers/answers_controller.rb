class AnswersController < ApplicationController
  def show
    render json: answer
  end

  def create
    @answer = Answer.create params
    render json: @answer
  end

  def update
    answer.update params
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
