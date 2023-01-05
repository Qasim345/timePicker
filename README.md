# timePicker 
## Time picker v-0.1.2

Useg:
### CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/Qasim345/timePicker@master/dist/time-picker.min.js"></script>
```
### locale:
```html
<script src="dist/time-picker.min.js"></script>
```
## Example:
```html
<script type="text/javascript">
timePicker("#myInput",{
  bg: "light",
  shadow: true,
  lang: "en",
  format: 12
})
</script>
```
## Full example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>timePicker</title>
  <style type="text/css">
    input {
      padding: 12px;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <input type="text" id="i1">
  <input type="text" id="i2">
  <input type="text" id="i3">
  <input type="text" id="i4">

  <script src="https://cdn.jsdelivr.net/gh/Qasim345/timePicker@master/dist/time-picker.min.js"></script>
  <script>
    // Syntax:
    // timePicker(element,{options});

    // example 1
    timePicker("#i1", {
      bg: "light", // default is light
      shadow: true, // default is false
      lang: "en", // default is fa
      format: 24 // default is 12
    });
    // example 2
    timePicker("#i2", {
      bg: "dark",
      shadow: true,
      lang: "fa",
      format: 12
    });
    // example 3
    timePicker("#i3", {
      bg: "light",
      shadow: false,
      lang: "fa",
      format: 24
    });
    // example 4
    timePicker("#i4", {
      bg: "dark",
      shadow: true,
      lang: "fa",
      format: 24
    });
  </script>
</body>
</html>
