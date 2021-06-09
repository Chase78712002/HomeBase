class Api::BuildersController < ApplicationController
  def new
  end

  def create
    builder = Builder.new(builder_params)
    if builder.save
      session[:builder_id] = builder_id
      redirect_to '/projects'
    else
      redirect_to '/signup'
  end

  private
    def builder_params
      params.require(:builder).permit(
        :email,
        :password, 
        :password_confirmation
      )
    end
end