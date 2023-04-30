<?php
// echo "(123)";
$username=$_GET['username'];
$password=$_GET['password'];
$callback=$_GET['callback'];
echo $callback;
$conn=mysqli_connect("localhost","root","root","Vue");
$sql="SELECT * FROM user WHERE username='".$username."'and password='".$password."'";
$res=mysqli_query($conn,$sql);

$num=mysqli_num_rows($res);
if($num>0){
    // 只接受json格式的数据   echo不行
    $data = array("type"=>1,"message"=>"success","name"=>$username,"email"=>$email);
}else{
    $data = array("type"=>0,"message"=>"error");
}
$data=json_encode($data);
echo "($data)";
?>