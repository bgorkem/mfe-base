System.register(['shell'], () => {
  let shell;

  return {
    setters: [(shellModule) => (shell = shellModule.default)],

    // execute code..
    execute() {
      console.log('bootstrapping the shell module ..');

      shell.bootstrap();
    },
  };
});
