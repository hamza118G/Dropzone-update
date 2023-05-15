Dropzone.autoDiscover = false;
var base64String;


var arr = new Array();

  var zdrop = new Dropzone('#dropzone', {
    url: '#',
    maxFiles: 2,
    maxFilesize: 30,
    addRemoveLinks: true,
   
    init: function() {
      this.on("complete", function(file) {      
      });
      this.on("removedfile", function(file) {
        console.log('File is Removed');

arr = arr.filter(function(item) {
    return item !== file.name
})
console.log(arr) 
    }); 
  }    
  });
    // Override the default 'upload' function to handle the file and convert it to a Base64 string
    Dropzone.prototype.uploadFiles = function (files) {
      const self = this;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function (e) {
            const base64String = e.target.result
            self.emit("success", file, { base64String: base64String });   
        arr.push(file.name)
        console.log('File Added:',arr) 
          };
        reader.readAsDataURL(file);
      }
    
      
    
    };
    
    
