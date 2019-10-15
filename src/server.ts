import errorHandler from 'errorhandler';
import app from './app';

//full error stack remove for production
app.use(errorHandler());

/*
Starting the server
*/

const server = app.listen(app.get("port"), () => {
    console.log("app now listening on port " + app.get('port') + " and in the " + app.get('env') + " environment\n");
    console.log("  Press CTRL-C to stop\n");
});

export default server;

