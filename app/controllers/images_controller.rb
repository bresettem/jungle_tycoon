class ImagesController < ApplicationController
  def index
    if params[:query].present?
      replace = params[:query].gsub(',', ' ')
      # 54
      @pagy, @images = pagy(Image.order(identifier: :asc).global_search(replace), items: 54)
    else
      @pagy, @images = pagy(Image.order(identifier: :asc), items: 54)
    end
    # Not too clean but it works!
    if turbo_frame_request?
      render partial: "images", locals: { images: @images }
    else
      render :index
    end
  end
end