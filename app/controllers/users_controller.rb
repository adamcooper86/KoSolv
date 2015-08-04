class UsersController < ApplicationController
  def create
    if @user = User.find_by(username: params[:username])
      if @user.pin.to_s == params[:pin]
        session[:username] = @user.username
        render json: @user
      else
        render nothing: true, status: 401
      end
    else
      @user = User.create username: params[:username], pin: params[:pin]
      session[:username] = @user.username
      render json: @user
    end
  end

  def current
    @user = User.find_by username: session[:username]
    if @user
      render json: @user
    else
      render status: 400
    end
  end
end
