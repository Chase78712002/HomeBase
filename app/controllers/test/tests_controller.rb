class Test::TestsController < ApplicationController
  def index
    render :json => {
      message: "hello!"
    }
  end
end