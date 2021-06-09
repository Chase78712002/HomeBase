class Api::DocumentCategoriesController < ApplicationController
  def index
    @document_categories = DocumentCategory.all

    render json: @document_categories
  end
end
