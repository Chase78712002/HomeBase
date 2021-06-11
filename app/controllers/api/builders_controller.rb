class Api::BuildersController < ApplicationController
  def new
  end

  def create
    builder = Builder.create(builder_params)
    if builder
      session[:builder_id] = builder_id
      redirect_to '/projects'
    else
      redirect_to '/signup'
    end
  end

  private
    def builder_params
      params.require(:builder).permit(
        :builder_id,
        :email,
        :password, 
        :password_confirmation
      )
    end
end