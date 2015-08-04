class SolutionsController < ApplicationController
  def index
    render json: Solution.all
  end
  def show
    render json: solution
  end

  def create
    @solution = Solution.create question_id: params[:question_id]
    render json: @solution
  end

  def update
    solution.update question_id: params[:question_id];
    render json: solution
  end

  def destroy
    solution.destroy;
    render nothing: true
  end

  private
  def solution
    @solution ||= Solution.find params[:id]
  end
end
