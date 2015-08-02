class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def show
    @question = Question.find params[:id]
    render json: @question
  end

  def create
    @question = Question.create prompt: params[:prompt], category: params[:category]
    render json: @question
  end

  def update
    @question = Question.find params[:id]
    @question.update prompt: params[:prompt], category: params[:category]
    render json: @question
  end

  def destroy
    Question.find(params[:id]).destroy
    render nothing: true
  end
end
