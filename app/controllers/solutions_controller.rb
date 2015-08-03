class SolutionsController < ApplicationController
  def show
    render json: solution
  end

  def create
    @solution = Solution.create params[:question_id]
    render json: @solution
  end

  def update
    solution.update params;
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
