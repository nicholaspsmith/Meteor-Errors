Meteor Errors
=====

A meteor plugin for creating Growl-like notifications for errors

Simply add to your meteor project using `meteor add npsjsdev:errors`

To throw an error, simply call the `Errors.throw()` function

Example:

```
if (error)
  Errors.throw(error.reason);
```
