<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $__env->yieldContent('title'); ?></title>
</head>
<body style="background-color: blueviolet">
    <main>
         
        <?php $__env->startSection('sidebar'); ?>
            This is the master sidebar.
        <?php echo $__env->yieldSection(); ?>
        <?php echo $__env->yieldContent('content'); ?>
    </main>
</body>
</html><?php /**PATH E:\sinar insiyatif\template\archive\public\views/layout.blade.php ENDPATH**/ ?>