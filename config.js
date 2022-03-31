registry=https://pkgs.dev.azure.com/YOUR-ORG/_packaging/YOUR-FEED/npm/registry/
always-auth=true
    navitia_component:
        class: Navitia\Component\Service\ServiceFacade
        factory: [Navitia\Component\Service\ServiceFacade, getInstance]
        calls:
            - [ setCache, ["@cache.app.taggable"]]
            - [ setConfiguration, ["%navitia_config%"]]
