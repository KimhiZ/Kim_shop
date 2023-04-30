<?php
$username=$_GET['username'];
$password=$_GET['password'];
$email=$_GET['email'];
$callback=$_GET['callback'];
echo $callback;
$conn=mysqli_connect("localhost","root","root","Vue");
$sql="SELECT * FROM user WHERE username='$username'";
$res=mysqli_query($conn,$sql);
if (!$res) {
  printf("Error: %s\n", mysqli_error($conn));
  exit();
}
$num=mysqli_num_rows($res);
if($num>0){
  $data=array("type"=>0,"message"=>"error");
}else{
  $sqli="INSERT INTO user(id,username,`password`,email) VALUES (null,'$username','$password','$email')";
  $result=mysqli_query($conn,$sqli);
  if($result){
     $data=array("type"=>1,"message"=>"success");
  }else{
    $data=array("type"=>-1,"message"=>"error");
  }
}
$data=json_encode($data);
echo "($data)";
?>