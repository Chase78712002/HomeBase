class Api::BuildersController < ApplicationController
  def new
  end

  def create
    builder = Builder.create!(
      email: params['user']['password']
      password: params['user']['password']
      password_confirmation: ['user']['password_confirmation']
    )
    if builder
      session[:builder_id] = builder.id
      render json: {
        status: :created,
        builder: builder
      }
    else
      render json: {status: 500}
    end
  end
end