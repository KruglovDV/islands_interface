defmodule IslandsInterface.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      IslandsInterfaceWeb.Endpoint,
      IslandsInterfaceWeb.Presence
    ]

    opts = [strategy: :one_for_one, name: IslandsInterface.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    IslandsInterfaceWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
