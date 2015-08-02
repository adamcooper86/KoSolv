class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def show
    render json: question
  end

  def create
    @question = Question.create prompt: params[:prompt], category: params[:category]
    render json: @question
  end

  def update
    question.update prompt: params[:prompt], category: params[:category]
    render json: @question
  end

  def destroy
    question.destroy
    render nothing: true
  end

  private
  def question
    @question ||= Question.find params[:id]
  end
end
