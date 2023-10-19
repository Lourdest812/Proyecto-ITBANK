listaClientes=[] #lista vacia que almacena todos los clientes
class banco(object):
    def __init__(self, cuenta, nombre, apellido, consignacion, retiro): #registro de usuario
        self.cuenta = cuenta
        self.nombre = nombre
        self.apellido = apellido
        self.retiro = retiro
        self.saldo = (consignacion - retiro)
        
        self.detalle = []

    def registros(self):
        print("Numero de cuenta: {}-{}-Saldo: {} ".format(self.cuenta,self.nombre,self.apellido,self.saldo))

    def transaccion(self,consignacion,retiro):
        sald=self.saldo
        self.consignacion = consignacion
        self.retiro = retiro
        self.saldo = (sald + consignacion - retiro)
        self.detalle = []
        print("Transaccion exitosa\n")
    
    def incluirtransaccion(self, consignacion):
        return("Consignación: {}\nSaldo: {} ".format(self.consignacion, self.saldo))
    
    def incluirtransaccion1(self, retiro):
        return("Retiro: {}\nSaldo: {} ".format(self.retiro,self.saldo))
    
    def transacciondetalle(self):
        return("Número de cuenta: {}-{} {}-Saldo: {} ".format(self.cuenta,self.nombre,self.apellido,self.retiro))

def registroCliente():
    print("Registro de nuevo cliente")
    cuenta = int(input("\nDigite el numero de cedula, este sera el número de cuenta\n" ))
    nombre = str(input("\nDigite el nombre del cliente\n"))
    apellido = str(input("\nDigite el apellido\n"))
    consignacion = int(input("\nValor con la que abre su cuenta\n"))
    retiro = 0
    print("Registro Exitoso\n")
    
    v = banco(cuenta,nombre,apellido,consignacion,retiro)
    listaClientes.append(v)

def listadoclientes():
    print("lista de clientes")
    for v in listaClientes:
        v.registros()

def buscarcliente():
    print("Buscar cliente")
    cuenta = int(input("\nDigite el número de cuenta\n"))
    for v in listaClientes:
        if cuenta == v.cuenta:
            v.registros()

def transacciones():
    print("Iniciando transacción")
    cuenta1 = int(input("\nDigite el numero de cuenta\n"))
    for v in listaClientes:
        if cuenta1 == v.cuenta:
            opc = int(input("\nQue transacción desea hacer\n oprima 1 para consignación digite 2 para retirar"))
            if opc == 1:
                consignacion = int(input("\nDigite el valor a consignar\n"))

                retiro = 0
                v.transaccion(consignacion, retiro)
                v.registros()
                recepcionmensaje = v.incluirtransaccion(consignacion)
                v.detalle.append(recepcionmensaje)
            
            if opc == 2:
                retiro = int(input("\nDigite el valor a retirar\n"))
                consignacion = 0
                v.transaccion(consignacion,retiro)
                v.registros()
                recepcionmensaje = v.incluirtransaccion1(retiro)
                v.detalle.append(recepcionmensaje)

def historial():
    print("Historial de movimientos")
    cuenta1 = int(input("\nDigite el número cuenta\n"))
    for v in listaClientes:
        if cuenta1 == v.cuenta:
            for recepcionmensaje in v.detalle:
                print("Movimiento: {}".format(recepcionmensaje))

def salir():
    print("\nGracias por visitar Banco ITBA")
    exit()

def main():
    while True:
        print("\nBienvenido al banco ITBA\n")
        opciones = int(input("\nQue operación desea realizar?\nOPRIME 1 PARA REGISTRAR NUEVO CLIENTE\nOPRIME 2 PARA CONSULTAS\nOPRIME 3 PARA TRANSACCIONES\nOPRIME 4 PARA VER LISTAS DE CLIENTES\nOPRIME 5 PARA VER ULTIMOS MOVIMIENTOS\nOPRIME 6 PARA SALIR\n"))
        if opciones == 1:
            registroCliente()
        if opciones == 2:
            buscarcliente()
        if opciones == 3:
            transacciones()
        if opciones == 4:
            listadoclientes()
        if opciones == 5:
            historial()
        if opciones == 6:
            salir()



if __name__ == '__main__':
    main()

