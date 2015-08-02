class SolutionsController < ApplicationController
  def show
    @solution = Solution.find params[:id]
    render json: @solution
  end

  def create
    @solution = Solution.create params[:question_id]
    render json: @solution
  end

  def update
    @solution = Solution.find params[:id]
    @solution.update params;
    render json: @solution
  end

  def destroy
    @solution = Solution.find params[:id]
    @solution.destroy;
    render nothing: true
  end
end
