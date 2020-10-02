# `lib`

> Demo Library API exposing two modules foo and baz, with default and named exports

## Usage

First import this lib as a remote in your Module Federation webpack settings:
```
...
 remotes: {
        lib: 'lib',
      },
...
```

Then import from this remote

```
import foo, { bar } from 'lib/foo';
import baz from 'lib/baz';

console.log('this is bar', bar(12));
console.log('this is foo', foo());
console.log('this is baz', baz());


```

In app1 package this is demonstrated