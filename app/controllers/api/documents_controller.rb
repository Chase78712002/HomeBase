class Api::DocumentsController < ApplicationController
  def index
    @documents = Document.all

    render json: @documents #the .to_json is implicitly run by Rails, it is not needed
  end

  def create
    # @document = Document.find_or_create_by(
    #   title: params[:title],
    #   category_type: params[:category_type],
    #   path: params[:path],
    #   project_id: params[:project_id]
    # )
    @document = Document.new document_params
    if @document.save
      render json: @document
    else
      render json: { error: document.errors.messages }, status: 422
    end
  end

  def update
    @document = Document.find params[:id]
    @document.update_attributes document_params # setup which attributes we want to be read only etc
    render json: @document
  end

  def destroy
    @document = Document.find params[:id]

    if @document.destroy
      head :no_content
    else
      render json: { error: document.errors.messages }, status: 422
    end
  end

  private
    def document_params
      params.require(:document).permit(
        :title,
        :category_type,
        :path,
        :project_id
      )
    end
end
