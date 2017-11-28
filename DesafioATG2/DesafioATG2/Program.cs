using System;
using System.Diagnostics;

namespace DesafioATG2
{
    class Program
    {
        static void Main(string[] args)
        {
            var programRunning = true;
            while (programRunning)
            {
                var stopwatch = new Stopwatch();
                stopwatch.Start();
                Console.WriteLine("Digite o a lista de numeros inteiros");
                var lista = Console.ReadLine();
                Console.WriteLine("Agora digite o numero que deseja verificar se existe na lista");
                var numero = Console.ReadLine();
                int.TryParse(numero, out int valor);
                var numeroPertence = verificarLista(lista, valor);
                if (numeroPertence)
                {
                    Console.WriteLine("Numero pertence a lista");
                }
                else
                {
                    Console.WriteLine("Numero nao pertence a lista");
                }
                stopwatch.Stop();
                Console.WriteLine($"Tempo para execucao do metodo: {stopwatch.Elapsed}");
                stopwatch.Restart();
                Console.ReadKey();
            }            
        }
        public static bool verificarLista(string lista, int numero)
        {
            try
            {
                string[] valores = lista.Split(',');
                foreach (var item in valores)
                {                   
                    if (item == numero.ToString())
                    {
                        return true;
                    }
                }
                return false;
            }
            catch (Exception e)
            {
                Console.WriteLine("Excecao gerada:");
                Console.WriteLine(e);
                return false;
            }            
        }
    }
}