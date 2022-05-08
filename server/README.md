# S.O.L.I.D: Os 5 princípios da POO

1. Single Responsiblity Principle (Princípio da responsabilidade única)
2. Open-Closed Principle (Princípio Aberto-Fechado)
3. Liskov Substitution Principle (Princípio da substituição de Liskov)
4. Interface Segregation Principle (Princípio da Segregação da Interface)
5. Dependency Inversion Principle (Princípio da inversão da dependência)

---------------

1. Cada classe deve ter apenas uma responsabilidade 
2. A classe deve estar aberta para extensão, porém fechada para modificação
3. Uma classe "pai" deve poder ser substituida pela "filha", sem que isso cause impactos
4. A criação de interfaces deve ser feita de forma bem segregada, p.ex: class impressora implements SuperImpressora (errado!) class impressora implements Scannear, Digitalizar, Imprimir ...
5. Dependa de abstrações e não de implementações. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
