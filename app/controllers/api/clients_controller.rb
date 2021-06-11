class Api::ClientsController < ApplicationController
  def new
  end

  def create
    client = Client.new(client_params)
    if client.save
      session[:client_id] = client_id
      redirect_to '/projects'
    else
      redirect_to '/signup'
    end
  end

  private
    def client_params
      params.require(:client).permit(
        :email,
        :password, 
        :password_confirmation
      )
    end
end
