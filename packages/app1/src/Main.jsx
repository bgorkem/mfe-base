import React from 'react';
import foo, { bar } from 'lib/foo';
import baz from 'lib/baz';

console.log('this is bar', bar(12));
console.log('this is foo', foo());
console.log('this is baz', baz());

export default () => <div>This is App1 component from App1 module</div>;
