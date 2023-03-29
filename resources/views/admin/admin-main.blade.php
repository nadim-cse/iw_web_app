<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="./img/fav.png" type="image/x-icon">
    @include('admin.partials.styles')
    @stack('styles')
    <title>Laravel</title>
    <script>
        window.baseUrl = "{{ env('APP_URL') }}";
    </script>
</head>
<body class="bg-gray-100">
    @include('admin.partials.header')
<!-- strat wrapper -->
<div class="h-screen flex flex-row flex-wrap">
    @include('admin.partials.navbar')
    @yield('content')
</div>
<!-- end wrapper -->
<!-- script -->
@include('admin.partials.scripts')
@stack('scripts')
</body>
</html>

