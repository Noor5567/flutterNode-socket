import 'package:http/http.dart' as http;
import 'package:socket_io_client/socket_io_client.dart' as IO;

void main() async {
  Map<String, dynamic> options = {
    'transports': ['websocket'],
    'autoConnect': false
  };
  IO.Socket socket = IO.io('http://localhost:8080/', options);
  socket.connect();
  socket.onConnect((_) {
    print("connect with nodeJS server ");
  });
  socket.onDisconnect((_){
    print("disconnected with nodeJS server ");
  });

}
