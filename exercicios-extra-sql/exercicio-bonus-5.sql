-- E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.
SELECT 
    p.id,
    p.name,
    COUNT( * ) as qtd_navers
from projects p
INNER JOIN projects_navers p_n on p.id = p_n.project_id 
GROUP BY p.name, p.id;
