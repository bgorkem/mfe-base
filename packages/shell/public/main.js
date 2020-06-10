System.register(['shell'], () => {
  let shell;

  return {
    setters: [(module) => (shell = module.default)],

    // execute code..
    execute() {
      console.log('bootstrapping the shell module ..');
      shell.bootstrap();
    },
  };
});
