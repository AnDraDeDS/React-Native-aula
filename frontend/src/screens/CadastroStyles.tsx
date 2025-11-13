import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#3e3737", // Fundo escuro
    width: '100%',
    height: '100%',
    justifyContent: 'center',  // Centraliza os itens na tela
    alignItems: 'center'       // Alinha os itens no centro horizontalmente
  },
  title: { 
    fontSize: 25, 
    fontWeight: 'bold', 
    color: '#fff',  // Cor do texto da title
    marginBottom: 30  // Espaçamento abaixo do título
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',  // Cor do texto no input
    fontSize: 16
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
  }
});
