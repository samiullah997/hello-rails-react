class Api::GreetingController < Api::ApplicationController
  def index
    @greeting = Greeting.all.shuffle

    render json: @greeting
  end
end
