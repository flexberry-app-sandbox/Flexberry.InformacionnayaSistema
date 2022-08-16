docker build --no-cache -f SQL\Dockerfile.PostgreSql -t informacionnaya_sistema/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t informacionnaya_sistema/app ../..
