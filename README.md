GrowingIO tracking for GitBook
==============

You can use install it via **NPM**:

```
$ npm install gitbook-plugin-growingio
```

And use it for your book with in the book.json:

```
{
    "plugins": ["growingio"]
}
```

You can set the GrowingIO account ID using the plugins configuration in the book.json:

```
{
    "plugins": ["growingio"],
    "pluginsConfig": {
        "growingio": {
            "cmds": [["setAccountId", "XXXXX"], ["setTrackerHost", "XXXXX"]]
        }
    }
}
```


Go to [growingio](https://www.growingio.com) to see you book's tracking data.
