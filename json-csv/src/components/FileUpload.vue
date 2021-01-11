<template>
  <div class="upload">
        <form action="http://localhost:3000/test/upload" method="post" enctype="multipart/form-data">
            <input class="fileinput" type="file" name="filesup" id="files"><br>
            <button class="btn" type="submit">Enviar</button><br>
            <button class="btn" type="reset">Limpar</button>
        </form>
  </div>
</template>

<script>
export default {
    name: 'FileUploader'
}
</script>

<style>
.btn {
    border-radius: 7px;
    margin-bottom: 5px;
}

</style>
