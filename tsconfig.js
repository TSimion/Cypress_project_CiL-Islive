{
    "compilerOptions"; {
        "target"; "es5",
        "lib"; ["es5", "dom"],
        "types"; ["cypress", "node", "@testing-library/cypress", "@icokie/cypress-webhooksite"],
        "noEmit"; true,
        "baseUrl"; "cypress"

    };

    "include"; ["**/*.ts"]

}

{
    "compilerOptions"; {
      "types"; ["cypress", "@icokie/cypress-webhooksite"]
    }
  }