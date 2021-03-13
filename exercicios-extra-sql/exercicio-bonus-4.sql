-- E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.
SELECT 
    p.id,
    p.name,
    n.id,
    n.name
from projects p
INNER JOIN projects_navers p_n on p.id = p_n.project_id 
INNER JOIN navers n on n.id = p_n.naver_id 
GROUP BY p.name, p.id,n.id,n.name;