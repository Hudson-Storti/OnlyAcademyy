import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '50%',
  },
  overlay: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
    resizeMode: 'cover',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    marginBottom: 25,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  video: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  column: {
    alignItems: 'center',
    marginTop: -60,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  subText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 40,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  smallButton: {
    width: 80,
    paddingVertical: 8,
    borderWidth: 0,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  blueButton: {
    backgroundColor: '#5790DF',
    borderRadius: 30,
  },
  whiteButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: 'black',
  },
  blueText: {
    color: '#000000',
  },
  scrollContainer: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bar: {
    height: 3,
    borderRadius: 2,
    backgroundColor: 'black',
    marginTop: 5,
    alignSelf: 'center',
    width: 15,
  },
  cameraButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  cameraButton: {
    position: 'absolute',
    top: 35,
    right: 10,
    width: 65,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  cameraIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  switchCameraButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  pagamento: {
    width: '10%',
    height: '10%',
    resizeMode: 'cover',
    marginLeft: '80%',
    padding: 30,
    marginTop: '-45%'
  },
  subscriptionModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  subscriptionModalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  subscriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  subscriptionOption: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#5790DF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  subscriptionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: 'black',
  },
  subscriptionButtonText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});
