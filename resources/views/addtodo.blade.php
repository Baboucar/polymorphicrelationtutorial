<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
     <h1>Please Enter Tas</h1>
    <form action="{{route('todo')}}" method="post">
        {{ csrf_field() }}
        <div>
            <input type="text" name="title" id="">
        </div>

        <div>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
        </div>

          <div>
              <input type="submit" value="Submit">
          </div>
    </form>
</body>
</html>
